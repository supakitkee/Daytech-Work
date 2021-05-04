import React, { useState } from "react";
import { CardEdit } from "../components/Layouts/Card";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Modal from "../components/Modal";
import EditJustSay from "../components/AddWidgets/EditJustSay";

export default function JustSay({ title, list, onDelete, onEdit }) {
  const [modalActiveEditJustSay, setModalActiveEditJustSay ] = useState(false);

  const handleDelete = function () {
    onDelete(list);
  };

  const handleCancel = function () {
    setModalActiveEditJustSay(false);
  };

  const handleEdit = function () {
    setModalActiveEditJustSay(true);
  };

  const handleSubmit = function (id, value) {
    onEdit(id, value)
    setModalActiveEditJustSay(false);
  };
  
  return (
    <>
        {modalActiveEditJustSay && (
          <Modal onCancel={handleCancel}>
            <EditJustSay onEditSubmit={handleSubmit} list={list} />
          </Modal>
        )}
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <CardEdit title="JustSay"
        key={list.id}
        onDelete={handleDelete}
        list={list}
        onEdit={handleEdit}>
          <div className="text-center mt-8 mb-12">
            <h1 className="text-4xl font-bold">{list.value}</h1>
          </div>
          <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">{list.date}</div>
          </div>
        </CardEdit>
      </div>
    </>
    

    // <Card
    //   title="JustSay"
    //   // editBtn={<MdEdit />}
    //   key={index}
    //   onDelete={handleDelete}
    //   list={list}
    // >
    //   <div className="text-center my-8">
    //     <h1 className="text-4xl font-bold">{list.value}</h1>
    //   </div>
    //   <div className="text-xs text-gray-400">
    //     <div className="mt-6 -mb-2 text-center">{list.date}</div>
    //   </div>
    // </Card>
  );
}
