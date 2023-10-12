defmodule BloodDonation.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      BloodDonationWeb.Telemetry,
      # Start the Ecto repository
      BloodDonation.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: BloodDonation.PubSub},
      # Start Finch
      {Finch, name: BloodDonation.Finch},
      # Start the Endpoint (http/https)
      BloodDonationWeb.Endpoint
      # Start a worker by calling: BloodDonation.Worker.start_link(arg)
      # {BloodDonation.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: BloodDonation.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BloodDonationWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
