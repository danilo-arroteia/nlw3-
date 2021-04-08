const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-27.22263",
  //   lng: "-49.6455874",
  //   name: "Lar das Meninas",
  //   about:
  //     " Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "15666444555",
  //   images: [
  //     "https://images.unsplash.com/photo-1610303160026-8b60f59d0d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3ODIzMTcw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  //     "https://images.unsplash.com/photo-1610597027907-bfd39d413861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3ODIzMjA0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visita das 8h até as 19h",
  //   open_on_weekends: "1",
  // });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente um orfanato, pleo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  // console.log(orphanage)

  // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '17'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
});
