let peer;
const store = Vue.reactive({
  昵称: '神经蛙',
  ID: '——— ———',
  oneid:'',
  登录状态: false,
  messages: [
    {
      onlyme: false,
      id: '——— ———',
      name: '神经蛙',
      time: '0000-00-00',
      text: 'Hello World!'
    }
  ],
});

const Login = {
  data() {
    return {
      store,
      show: true,
      昵称: '',
      ID: '',
      oneid: '',
    }
  },
  methods: {
    go(昵称, ID) {
      store.昵称 = 昵称 || '神经蛙';
      peer = new Peer(ID);
      peer.on('open', function (id) {
        store.ID = id
        console.log('My peer ID is: ' + id);
        peer.on('connection', function (conn) {
          Varlet.Snackbar.info('收到链接');
          store.oneid = conn.peer;
          conn.on('open', function () {
            // Receive messages
            conn.on('data', function (data) {
              store.messages.push({ id: conn.peer, 'text': data });
              console.log('Received', data);
            });
          });
        });
      });
      console.log(store.昵称 + ID);
    }
  },
  template: `
  <var-dialog v-model:show="show" :cancel-button="false" :close-on-click-overlay="false" @confirm="go(昵称,ID)" >
    <template #title>
      <var-icon name="information" color="#2979ff" />
      <span>Login</span>
    </template>

    <var-cell>
      <var-input variant="outlined" size="small" placeholder="昵称" clearable v-model="昵称" />
    </var-cell>
    <var-cell>
      <var-input variant="outlined" size="small" placeholder="ID" clearable v-model="ID" />
    </var-cell>
  </var-dialog>
  `
}

export { store, Login, peer }