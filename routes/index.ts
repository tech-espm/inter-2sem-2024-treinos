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
		let opcoes = {
			titulo: "Treinos"
		};

		res.render("index/treinos", opcoes);
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
