import { useState } from 'react';
import Header from '@/components/Header';
import Modal from '@/components/modal/Modal';

const HomeView: React.FC = () => {
  const [isShowingModal, setIsShowing] = useState(false);

  const toggleModal = () => {
    setIsShowing(!isShowingModal);
  };

  return (
    <>
      <div className="h-screen bg-gray-200">
        <Header />
        <section className="p-3 ">
          <h1 className="flex justify-center text-3xl font-bold text-teal-800">
            Hello Modal World!
          </h1>

          <div className="h-screen flex items-center justify-center">
            <div className="flex gap-6">
              <button
                className="rounded-xl p-5 w-52 bg-teal-500 text-gray-50 font-bold uppercase shadow-md hover:shadow-sm shadow-teal-600 hover:bg-teal-400"
                onClick={toggleModal}
              >
                Open Modal
              </button>

              <button
                className="rounded-xl p-5 w-52 bg-blue-500 text-gray-50 font-bold uppercase shadow-md hover:shadow-sm shadow-blue-600 hover:bg-blue-400"
                onClick={toggleModal}
              >
                Another Modal
              </button>
            </div>
          </div>
        </section>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
      </div>
    </>
  );
};

export default HomeView;
