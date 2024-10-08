﻿import app = require("teem");

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

	public async produtos(req: app.Request, res: app.Response) {
		let produtoA = {
			id: 1,
			nome: "Produto A",
			valor: 25
		};

		let produtoB = {
			id: 2,
			nome: "Produto B",
			valor: 15
		};

		let produtoC = {
			id: 3,
			nome: "Produto C",
			valor: 100
		};

		let produtosVindosDoBanco = [ produtoA, produtoB, produtoC ];

		let opcoes = {
			titulo: "Listagem de Produtos",
			produtos: produtosVindosDoBanco
		};

		res.render("index/produtos", opcoes);
	}
}

export = IndexRoute;
