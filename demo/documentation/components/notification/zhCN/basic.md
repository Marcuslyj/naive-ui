# 基础用法
```html
<n-button @click="notify1">
  Wouldn't it be Nice
</n-button>
<n-button @click="notify2">
  Satisfaction
</n-button>
```
```js
export default {
  methods: {
    notify1 () {
      this.$NNotification.open({
        title: `Wouldn't it be Nice`,
        description: 'From the Beach Boys',
        content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
        meta: '2019-5-27 15:11',
        avatar: h => 
          h('n-avatar', {
            props: {
              size: 'small',
              round: true,
              src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573566445479&di=8804b1996cbf89582232a3994665454c&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3628555514%2C2933400515%26fm%3D214%26gp%3D0.jpg'
            }
          }),
        onAfterHide: () => {
          this.$NMessage.success(`Wouldn't it be Nice`)
        },
      })
    },
    notify2 () {
      let markAsRead = false
      const notification = this.$NNotification.open({
        title: 'Satisfaction',
        content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
        meta: '2019-5-27 15:11',
        action: h => h(
          'n-button',
          {
            props: {
              text: true,
              type: 'primary'
            },
            on: {
              click: () => {
                markAsRead = true
                notification.hide()
              }
            }
          },
          ['已读']
        ),
        onClose: () => {
          if (!markAsRead) {
            this.$NMessage.warning('请设为已读')
            return false
          }
        }
      })
    }
  }
}
```
```css
.n-button {
  margin: 0 12px 8px 0;
}
```