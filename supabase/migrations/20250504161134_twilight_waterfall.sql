/*
  # Create tables for event participants, volunteers, and partners

  1. New Tables
    - `event_participants`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text)
      - `message` (text)
      - `event_id` (integer, required)
      - `created_at` (timestamp with timezone)
      - `gdpr_consent` (boolean, required)

    - `volunteers`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp with timezone)
      - `gdpr_consent` (boolean, required)

    - `partners`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp with timezone)
      - `gdpr_consent` (boolean, required)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read their own data
    - Add policies for admin users to read all data
*/

-- Create event_participants table
CREATE TABLE IF NOT EXISTS event_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  message text,
  event_id integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  gdpr_consent boolean NOT NULL DEFAULT false,
  CONSTRAINT event_participants_gdpr_consent_check CHECK (gdpr_consent = true)
);

-- Create volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  message text,
  created_at timestamptz DEFAULT now(),
  gdpr_consent boolean NOT NULL DEFAULT false,
  CONSTRAINT volunteers_gdpr_consent_check CHECK (gdpr_consent = true)
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  message text,
  created_at timestamptz DEFAULT now(),
  gdpr_consent boolean NOT NULL DEFAULT false,
  CONSTRAINT partners_gdpr_consent_check CHECK (gdpr_consent = true)
);

-- Enable Row Level Security
ALTER TABLE event_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- Create policies for event_participants
CREATE POLICY "Users can read own event_participants data"
  ON event_participants
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM event_participants WHERE email = auth.jwt()->>'email'
  ));

CREATE POLICY "Users can insert own event_participants data"
  ON event_participants
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt()->>'email' = email);

-- Create policies for volunteers
CREATE POLICY "Users can read own volunteers data"
  ON volunteers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM volunteers WHERE email = auth.jwt()->>'email'
  ));

CREATE POLICY "Users can insert own volunteers data"
  ON volunteers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt()->>'email' = email);

-- Create policies for partners
CREATE POLICY "Users can read own partners data"
  ON partners
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM partners WHERE email = auth.jwt()->>'email'
  ));

CREATE POLICY "Users can insert own partners data"
  ON partners
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt()->>'email' = email);

-- Create policies for admins
CREATE POLICY "Admins can read all event_participants"
  ON event_participants
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'role' = 'admin');

CREATE POLICY "Admins can read all volunteers"
  ON volunteers
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'role' = 'admin');

CREATE POLICY "Admins can read all partners"
  ON partners
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'role' = 'admin');