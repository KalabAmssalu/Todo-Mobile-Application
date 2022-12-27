import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from "../styles/appstyles";

import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  handleEditTodo,
  todos
}
) => {
  //start
  const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
    setTodoToBeEdited(null);
  };
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      });
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    }

    setTodoInputValue("");
  };

  return (
    <>
      <ModalButton
        onPress={() => setModalVisible(true)}>
        <AntDesign name='plus' size={30} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle> Todos </HeaderTitle>
              <AntDesign name='edit' size={30} color={colors.tertiary} />
            </ModalIcon>
            <StyledInput
              placeholder='Add a Todo'
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={false}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name='close' size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name='check' size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};
export default InputModal;
