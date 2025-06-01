package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, world!")
}

func handleData(w http.ResponseWriter, r *http.Request) {
	// print data from frontend
	// CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*") // or specific domain
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var form map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
		http.Error(w, "invalid json", http.StatusBadRequest)
		return
	}
	fmt.Println("Received data:", form)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}

func main() {
	http.HandleFunc("/uploadData", handleData)

	fmt.Println("Server starting on :8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
