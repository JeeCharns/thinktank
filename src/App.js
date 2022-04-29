import './App.css';
import './components/input';
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { TextInput } from './components/input';
import { HeadingHome } from './components/banner';

function App() {
  return (
    <>
    <HeadingHome />
    <TextInput />
    </>
  )}

export default App;
