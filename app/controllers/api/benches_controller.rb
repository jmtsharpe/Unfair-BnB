class Api::BenchesController < ApplicationController
	def show
		@bench = Bench.find(params[:id])
	end

	def create
		@bench = Bench.new(bench_params)

		if @bench.save!
			render: index
		else
			render: new
		end
	end

	def index
		@benches = Bench.in_bounds(params[:bounds])
	end

	def new
		@bench = Bench.new
	end

	private

	def bench_params
		params.require(:bench).permit(:lat, :lng, :description, :seating)
	end

end
