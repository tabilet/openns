package main

import (
	"fmt"
	"os"
)

func main() {
	dbname := "/tmp/xdata"
	if len(os.Args) > 1 {
		dbname = os.Args[1]
	}
	fmt.Printf("clean up database, %s\n", dbname)
	if err := os.RemoveAll(dbname); err != nil {
		panic(err)
	}
}
