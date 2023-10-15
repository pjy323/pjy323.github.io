import { store, Login, peer } from './components.js'
let conn;
export default {
  data() {
    return {
      peer,
      store,
      text: '',
      messages: [
        {
          onlyme: false,
          id: '——— ———',
          name: '神经蛙',
          time: '0000-00-00',
          text: 'Hello World!'
        }
      ],
    }
  },
  components: {
    Login
  },
  methods: {
    链接(e) {
      peer.on('error', function (err) {
        Varlet.Snackbar.error('' + err)
        console.log(err)
      });
      conn = peer.connect(e);
      conn.on('open', function () {
        // Receive messages
        conn.on('data', function (data) {
          console.log('Received', data);
          store.messages.push({ 'text': data });
        });
      });
    },
    发消息(text) {
      store.messages.push({ id: store.ID, 'text': text });
      conn.send(text);
    }
  },
  template: `
  <Login/>
  <div class="消息列表容器">
    <var-cell border>
      <h3>
        {{store.昵称}}：{{store.ID}}
      </h3>
      <var-input placeholder="连接目标ID" v-model="store.oneid">
      <template #append-icon>
        <var-icon class="append-icon" name="power" color="black" @click="链接(store.oneid)"/>
      </template>
      </var-input>
    </var-cell>
    <var-cell border v-for="message in store.messages" >
      <b>{{message.name}}<b>
      <span> * </span>
      <small>ID : {{message.id}}</small>
      <p>{{message.text}}</p>
    </var-cell>
  </div>
  
  <var-paper :elevation="2" radius="6" :height="72" class="悬浮输入框">
    <var-input variant="outlined" placeholder="PeerJS" placeholder="Hello World" v-model="text">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="26"/>
      </template>
      <template #append-icon>
       <var-button type="primary" size="small" :disabled="text==''" @click="messages.push({'text': text});发消息(text);text='';">
        <var-icon name="message-text-outline" />
       </var-button>
      </template>
    </var-input>
  </var-paper>
  `
}