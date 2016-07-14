require 'middleman-core/load_paths'
::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/rack'

require "rack"
require "middleman/rack"
require "./custom_404"

not_found_path = File.join(__dir__, "source/404.html.erb")

use Custom404, not_found_path

run Middleman.server


require 'fileutils'
FileUtils.mkdir('log') unless File.exist?('log')
::Middleman::Logger.singleton("log/#{ENV['RACK_ENV']}.log")

app = ::Middleman::Application.new

run ::Middleman::Rack.new(app).to_app
