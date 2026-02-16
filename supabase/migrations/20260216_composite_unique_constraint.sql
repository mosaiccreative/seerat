-- Migration: Change unique constraint from email-only to (email, signup_source)
-- This allows the same person to sign up for newsletter, course waitlist, AND store waitlist
-- Each form will send its own unique confirmation email
-- Duplicates are still prevented for the SAME form

-- Step 1: Drop the existing unique constraint on email
-- The constraint name might vary, so we'll try common patterns
DO $$
BEGIN
    -- Try to drop constraint by common naming patterns
    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'subscribers_email_key') THEN
        ALTER TABLE public.subscribers DROP CONSTRAINT subscribers_email_key;
    END IF;

    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'subscribers_email_unique') THEN
        ALTER TABLE public.subscribers DROP CONSTRAINT subscribers_email_unique;
    END IF;

    -- Also try dropping any unique index on email alone
    DROP INDEX IF EXISTS subscribers_email_idx;
    DROP INDEX IF EXISTS subscribers_email_key;
    DROP INDEX IF EXISTS idx_subscribers_email;
END $$;

-- Step 2: Add composite unique constraint on (email, signup_source)
-- This allows same email with different signup_source values
ALTER TABLE public.subscribers
ADD CONSTRAINT subscribers_email_signup_source_unique
UNIQUE (email, signup_source);

-- Step 3: Add an index for faster lookups by email (non-unique)
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON public.subscribers(email);

-- Verification comment
COMMENT ON CONSTRAINT subscribers_email_signup_source_unique ON public.subscribers
IS 'Allows same email to sign up for multiple lists (newsletter, course, store) but prevents duplicate signups for the same list';
