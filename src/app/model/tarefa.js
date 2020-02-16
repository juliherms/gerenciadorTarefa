import Sequelize, { Model } from 'sequelize';

//representa a tabela de tarefas

class Tarefa extends Model {
    static init(sequelize){
        super.init({
            descricao: Sequelize.STRING,
            status: Sequelize.INTEGER,
            },
            {
            sequelize,
            }
        );
    }
}

export default Tarefa;