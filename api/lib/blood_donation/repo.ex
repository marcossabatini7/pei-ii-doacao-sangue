defmodule BloodDonation.Repo do
  use Ecto.Repo,
    otp_app: :blood_donation,
    adapter: Ecto.Adapters.Postgres
end
