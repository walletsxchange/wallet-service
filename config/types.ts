const TYPES = {
    SampleService: Symbol.for('SampleService'),
    SampleRepository: Symbol.for('SampleRepository'),
    CrudRepository: Symbol.for('CrudRepository'),
    IRepository: Symbol.for('IRepository'),
    MongodbClient: Symbol.for('MongodbClient'),
    UserService: Symbol.for('UserService'),
    UserRepositry: Symbol.for('UserRepositry'),
    IModelFactory: Symbol.for('IModelFactory'),
    IDataSource: Symbol.for('IDataSource'),
    LoginAttemptRepositry: Symbol.for('LoginAttemptRepositry'),
    OtpRepository: Symbol.for('OtpRepository'),
    OtpService: Symbol.for('OtpService'),
    ReferralRepositry: Symbol.for('ReferralRepositry'),
    ReferralService: Symbol.for('ReferralService'),
    WalletRepository: Symbol.for('WalletRepository'),
    WalletHistoryRepository: Symbol.for('WalletHistoryRepository'),
    WalletHistoryService: Symbol.for('WalletHistoryService'),
    WalletService: Symbol.for('WalletService'),
    AirtimeToCashService: Symbol.for('AirtimeToCashService')
};

export default TYPES;
