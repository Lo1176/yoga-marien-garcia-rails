require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module YogaMarienGarciaRails
  class Application < Rails::Application
    config.generators do |generate|
      generate.assets false
      generate.helper false
      generate.test_framework :test_unit, fixture: false
    end
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    # Initialize default language and path
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
    config.i18n.default_locale = :es
    # I18n.available_locales = [:fr, :cat]

    # Where the I18n library should search for translation files
    # I18n.load_path += Dir[Rails.root.join('lib', 'locale', '*.{rb,yml}')]

    # Permitted locales available for the application
    # I18n.available_locales = [:es, :cat, :fr]

    # Set default locale to something other than :en
    # I18n.default_locale = :es

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
