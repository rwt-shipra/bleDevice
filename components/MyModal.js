class MyModal extends Component {
    render() {
      return (
        <Modal
          visible = {this.props.visible}
          animationType="slide"
          transparent
          onRequestClose={() => {}} >
             <TextInput 
               style = {styles.inputBox}
               onChangeText={(changedText) => this.props.onInputChanged(changedText)} />
        </Modal>
      )
    }
}