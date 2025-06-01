package routes

import (
    "net/http"
    "github.com/gorilla/mux"
    "backend/internal/handlers"
)

func SetupRoutes(h *handlers.Handler) *mux.Router {
    router := mux.NewRouter()

    router.HandleFunc("/get", h.GetHandler).Methods(http.MethodGet)
    router.HandleFunc("/post", h.PostHandler).Methods(http.MethodPost)

    return router
}