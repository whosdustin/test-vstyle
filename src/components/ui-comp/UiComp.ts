import { Vue, Component } from 'vue-property-decorator';

import UiChild from '../ui-child';

@Component({
  components: {
    UiChild
  }
})
export default class UiComp extends Vue {}