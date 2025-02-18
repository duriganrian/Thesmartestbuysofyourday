class ProdutosRequests {
    constructor() {
        this.serverUrl = "http://localhost:3333";
        this.routeListarProdutos = "/produtos";
    }

    async listarProdutos() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarProdutos}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error("Não foi possível listar os produtos.");
            }

            return await response.json();
        } catch (error) {
            console.error(`Erro ao buscar produtos: ${error.message}`);
            return [];
        }
    }
}

export default new ProdutosRequests();
