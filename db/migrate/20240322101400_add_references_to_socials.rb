class AddReferencesToSocials < ActiveRecord::Migration[7.0]
  def change
    add_reference :socials, :user, foreign_key: true
    add_reference :socials, :talent, foreign_key: true
  end
end
