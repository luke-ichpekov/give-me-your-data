package models

type Model struct {
    ID    int    `json:"id"`
    Name  string `json:"name"`
    Value string `json:"value"`
}

// NewModel creates a new instance of Model
func NewModel(id int, name string, value string) *Model {
    return &Model{
        ID:    id,
        Name:  name,
        Value: value,
    }
}

// Update updates the Model's fields
func (m *Model) Update(name string, value string) {
    m.Name = name
    m.Value = value
}