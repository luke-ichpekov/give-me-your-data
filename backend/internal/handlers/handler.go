package handlers

import (
    "net/http"
)

type Handler struct{}

func (h *Handler) GetHandler(w http.ResponseWriter, r *http.Request) {
    // Handle GET request
}

func (h *Handler) PostHandler(w http.ResponseWriter, r *http.Request) {
    // Handle POST request
}