# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!(
	description: "This bench is outside the bodega called New Future Grocery. A guy got stabbed there. The make ok sandwiches.",
	lat: 40.689909,
	lng: -73.919070
)

Bench.create!(
	description: "This bench is at Washington Square Park. I bet there isn't a better bench in all of NYC. Unfortunately you have to compete with people who are pretty committed to the bench life.",
	lat: 40.731030,
	lng: -73.997625
)

Bench.create!(
	description: "Not very accomadating. But at least it's not in New Jersey, which is nice.",
	lat: 40.691620,
	lng: -74.030843
)
