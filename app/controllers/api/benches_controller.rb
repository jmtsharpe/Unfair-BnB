class Api::BenchesController < ApplicationController
	def show
	end

	def create
	end

	def index
		@benches = Bench.all
	end
end
