const CreateUserService = require('./CreateUserService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');

const AppError = require('../utils/AppError');

describe('CreateUserService', () => {
  let userRepositoryInMemory = null;
  let createUserService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserService = new CreateUserService(userRepositoryInMemory);
  });

  it('should create a user', async () => {
    const user = {
      name: 'User Test',
      email: 'user.test@email.com',
      password: '1234',
    };

    const userCreated = await createUserService.execute(user);
    expect(userCreated).toHaveProperty('id');
  });

  it('should not create a user with an already used email', async () => {
    const user1 = {
      name: 'User Test 1',
      email: 'user.test@email.com',
      password: '1234',
    };

    const user2 = {
      name: 'User Test 2',
      email: 'user.test@email.com',
      password: '123456',
    };

    await createUserService.execute(user1);
    await expect(createUserService.execute(user2)).rejects.toEqual(
      new AppError('Usuário já cadastrado'),
    );
  });
});
