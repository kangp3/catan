Catan
====

Bootstrapping the DB
--------------------
1. Bootstrap the DB configuration using the initdb tool
  ```
  $ initdb -D .pgdata
  ```
2. Start the DB service
  ```
  $ pg_ctl -D .pgdata -l .pgdata/logfile start
  ```
3. Initialize DB
  ```
  $ psql -f dev/init.sql
  ```

Running backend server
----------------------
1. Start the watcher service
  ```
  dev/gowatch.sh
  ```

Running frontend server
-----------------------
1. Start the frontend process
  ```
  cd js
  npm start
  ```
