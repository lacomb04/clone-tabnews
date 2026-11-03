import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersionResult = await database.query("SHOW server_version");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  const databaseConnectionsResult = await database.query(
    "SHOW max_connections",
  );

  const databaseConnectionsValue = parseInt(
    databaseConnectionsResult.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "Select count(*)::int from pg_stat_activity where datname = $1",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows.length;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: databaseConnectionsValue,
        opened_connections: databaseOpenedConnectionsValue,
      },
      version: databaseVersionValue,
    },
  });
}

export default status;
