import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}

	public async treinos(req: app.Request, res: app.Response) {
		let treinos;

		await app.sql.connect(async (sql) => {
			treinos = await sql.query("select treino.id, treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, treino.favoritos, tipo.nome tipo from treino inner join tipo on tipo.id = treino.idtipo");
		});

		let opcoes = {
			titulo: "Treinos",
			treinos: treinos
		};

		res.render("index/treinos", opcoes);
	}

	public async verTreino(req: app.Request, res: app.Response) {
		let id = parseInt(req.query["id"] as string);
		let treinos;

		await app.sql.connect(async (sql) => {
			treinos = await sql.query("select treino.id, treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, treino.favoritos, tipo.nome tipo from treino inner join tipo on tipo.id = treino.idtipo where treino.id = ?", [id]);
		});

		let opcoes = {
			titulo: "Treino",
			treino: treinos[0]
		};

		res.render("index/verTreino", opcoes);
	}

	@app.http.post()
	public async editar(req: app.Request, res: app.Response) {
		let treino = req.body;

		if (!treino.nome) {
			res.status(400).json("Nome inválido");
			return;
		}

		await app.sql.connect(async (sql) => {
			await sql.query("update treino set nome = ?, idtipo = ?, imagem = ?, descricao_breve = ?, descricao_completa = ? where id = ?", [treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, treino.id]);
		});

		res.json(true);
	}

	public async editarTreino(req: app.Request, res: app.Response) {
		let id = parseInt(req.query["id"] as string);
		let treinos;

		await app.sql.connect(async (sql) => {
			treinos = await sql.query("select treino.id, treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, treino.favoritos, tipo.nome tipo from treino inner join tipo on tipo.id = treino.idtipo where treino.id = ?", [id]);
		});

		let opcoes = {
			titulo: "Editar Treino",
			treino: treinos[0]
		};

		res.render("index/editarTreino", opcoes);
	}

	@app.http.post()
	public async criar(req: app.Request, res: app.Response) {
		let treino = req.body;

		if (!treino.nome) {
			res.status(400).json("Nome inválido");
			return;
		}

		await app.sql.connect(async (sql) => {
			await sql.query("insert into treino (nome, idtipo, imagem, descricao_breve, descricao_completa, favoritos) values (?, ?, ?, ?, ?, ?)", [treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, Math.trunc(Math.random() * 9000) + 1000]);
		});

		res.json(true);
	}

	public async criarTreino(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Criar Treino"
		};

		res.render("index/criarTreino", opcoes);
	}

	public async meusTreinos(req: app.Request, res: app.Response) {
		let treinos;

		await app.sql.connect(async (sql) => {
			treinos = await sql.query("select treino.id, treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, treino.favoritos, tipo.nome tipo from treino inner join tipo on tipo.id = treino.idtipo");
		});

		let opcoes = {
			titulo: "Meus Treinos",
			treinos: treinos
		};

		res.render("index/meusTreinos", opcoes);
	}

	public async cadastro(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Cadastre-se"
		};

		res.render("index/cadastro", opcoes);
	}

	public async login(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Login"
		};

		res.render("index/login", opcoes);
	}
	
	public async vejaMais(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Veja Mais"
		};

		res.render("index/vejaMais", opcoes);
	}
	
}

export = IndexRoute;
