ActiveRecord::Schema[7.2].define(version: 2025_08_22_062235) do
  enable_extension "plpgsql"

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
