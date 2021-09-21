class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :description
      t.has_many :sections
      t.has_many :episodes, through: :sections
      t.timestamps
    end
  end
end
