class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :img_url

      t.timestamps
    end
  end
end
