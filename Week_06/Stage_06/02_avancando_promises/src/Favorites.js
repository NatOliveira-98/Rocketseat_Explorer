import GitHubUser from './GitHubUser.js';

class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.loadUserData();
  }

  loadUserData() {
    this.userData =
      JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  saveToLocalStorage() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.userData));
  }

  async addUser(username) {
    try {
      const userExists = this.userData.find(entry => entry.login === username);

      if (userExists) {
        throw new Error('Usuário já cadastrado');
      }

      const user = await GitHubUser.search(username);

      if (user.login === undefined) {
        throw new Error('Usuário não encontrado');
      }

      this.userData = [user, ...this.userData];
      this.update();
      this.saveToLocalStorage();
    } catch (error) {
      alert(error.message);
    }
  }

  deleteUser(user) {
    const selectedUser = this.userData.filter(
      item => item.login !== user.login,
    );

    this.userData = selectedUser;
    this.update();
    this.saveToLocalStorage();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector('table tbody');

    this.update();
    this.onAdd();
  }

  onAdd() {
    const addBtn = this.root.querySelector('.search button');
    addBtn.onclick = () => {
      const { value } = this.root.querySelector('.search input');

      this.addUser(value);
    };
  }

  update() {
    this.removeAllTalbeRows();

    this.userData.forEach(user => {
      const row = this.createTableRow();

      row.querySelector(
        '.user img',
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector('.user img').alt = `Imagem do usuário ${user.name}`;
      row.querySelector('.user a').href = `https://github.com/${user.login}`;
      row.querySelector('.user a p').textContent = `${user.name}`;
      row.querySelector('.user a span').textContent = `${user.login}`;
      row.querySelector('.repositories').textContent = `${user.public_repos}`;
      row.querySelector('.followers').textContent = `${user.followers}`;

      row.querySelector('.remove').onclick = () => {
        const isOkToDelete = confirm(
          'Tem certeza que deseja deletar essa linha?',
        );
        if (isOkToDelete) {
          this.deleteUser(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createTableRow() {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="user">
        <img
          src="https://github.com/userLogin.png"
          alt="Imagem do usuário"
        />
        <a href="https://github.com/userLogin" target="_blank">
          <p>userName</p>
          <span>userLogin</span>
        </a>
      </td>
      <td class="repositories">publicRepositories</td>
      <td class="followers">seguidores</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `;

    return tr;
  }

  removeAllTalbeRows() {
    this.tbody.querySelectorAll('tr').forEach(tr => tr.remove());
  }
}
