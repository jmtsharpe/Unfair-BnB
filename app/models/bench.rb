class Bench < ActiveRecord::Base

	def self.in_bounds(bounds)
		benches = Bench.all.select do |bench|
			bench.lat <= bounds[:northEast][:lat].to_f &&
			bench.lng <= bounds[:northEast][:lng].to_f &&
			bench.lat >= bounds[:southWest][:lat].to_f &&
			bench.lng >= bounds[:southWest][:lng].to_f
		end
		benches
	end

end
