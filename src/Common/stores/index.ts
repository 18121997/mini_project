import TabsStore from '../../Admin/stores/TabsStore';
import ResourcesStore from '../../Admin/stores/ResourcesStore';
import RequestsStore from '../../Admin/stores/RequestsStore';
import UsersStore from '../../Admin/stores/UsersStore';
import ResourceFetchServiceFixture from '../../Admin/services/ResourceFetchService/index.fixture';
import RequestsFetchServiceFixture from '../../Admin/services/RequestsFetchService/index.fixture';
import UsersFetchServiceFixture from '../../Admin/services/UsersFetchService/index.fixture';

const tabsStore = new TabsStore();

const resourcesStore = new ResourcesStore(new ResourceFetchServiceFixture());

const requestsStore = new RequestsStore(new RequestsFetchServiceFixture());

const usersStore = new UsersStore(new UsersFetchServiceFixture());

export default { tabsStore, resourcesStore, requestsStore, usersStore };
