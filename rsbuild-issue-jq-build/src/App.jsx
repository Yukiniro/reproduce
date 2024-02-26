import { useEffect } from 'react';
import './App.css';
import $ from 'jquery';

const App = () => {

  useEffect(() => {
    $(document.body).on('click', () => {
      console.log('click');
    });
    // $(document.body).on('mousedown', () => {
    //   console.log('mousedown');
    // });

    setTimeout(() => {
      alert(' $(document.body).off()');
      $(document.body).off();
    }, 1000)

  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
