
import sequelizeGlobal from './config/db'  //dev

// import S3Config from './config/s3-prod.json'  //prod
import S3Config from './config/s3-dev.json'  //dev

const nodeAdminConfig = {
    sequelize: sequelizeGlobal,
    s3Config:S3Config,

}

export default nodeAdminConfig;