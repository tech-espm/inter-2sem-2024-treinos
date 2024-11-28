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
			treinos = await sql.query("select treino.id, treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa, tipo.nome tipo from treino inner join tipo on tipo.id = treino.idtipo");
		});

		let opcoes = {
			titulo: "Treinos",
			treinos: treinos
		};

		res.render("index/treinos", opcoes);
	}

	@app.http.post()
	public async criar(req: app.Request, res: app.Response) {
		let treino = req.body;

		if (!treino.nome) {
			res.status(400).json("Nome inválido");
			return;
		}

		await app.sql.connect(async (sql) => {
			await sql.query("insert into treino (nome, idtipo, imagem, descricao_breve, descricao_completa) values (?, ?, ?, ?, ?)", [treino.nome, treino.idtipo, treino.imagem, treino.descricao_breve, treino.descricao_completa]);
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
		let opcoes = {
			titulo: "Meus Treinos"
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
	
}

export = IndexRoute;
