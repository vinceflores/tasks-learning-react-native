import { useEffect, useState } from "react";
import { TextInput, View, Text, Button, Pressable } from "react-native";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  function addTodo() {
    if (input !== "") {
      setTodo((prev) => [...prev, input]);
      setInput("");
    }
  }

  function deleteDoto(index: number) {
    setTodo((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <View className="bg-black h-screen flex flex-col justify-start p-4 items-start">
      <View className=" mt-12 w-full ">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-white text-4xl">Tasks</Text>
          <Text className="text-white text-xl">{input.length}</Text>
        </View>
        <TextInput
          value={input}
          onChangeText={setInput}
          className="bg-slate-900 mt-4  p-4 text-white rounded-lg "
        />
      </View>
      <Pressable
        onPress={addTodo}
        className="border border-white p-2 rounded-lg mt-4 w-full items-center"
      >
        <Text className="text-white text-lg">Add Todo</Text>
      </Pressable>
      <View className="w-full my-4 ">
        {todo?.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={item}
            deleteTodo={deleteDoto}
          />
        ))}
      </View>
    </View>
  );
}
type TodoProps = {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
};

const TodoItem = ({ todo, deleteTodo, index }: TodoProps) => {
  function del() {
    deleteTodo(index);
  }

  return (
    <View className="my-2  border border-gray-700 w-full flex flex-row justify-between rounded-lg text-3xl p-2 text-blue-500">
      {/* <Text className="text-blue-500">{index + 1}</Text> */}
      <Text className="text-blue-500">{todo}</Text>
      <Pressable onPress={del} className="flex flex-row space-x-2">
        <Text className="text-red-500">X</Text>
      </Pressable>
    </View>
  );
};
