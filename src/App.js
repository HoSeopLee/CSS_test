import './index.css';

function App() {
  return (
    <>
    <div className="App">
      <ul>
        <li>사과</li>
        <li>딸기</li>
        <li className="orange">오렌지</li>
        <li className="">오렌지</li>
        <li className="">오렌지</li>
      </ul>
      <div>당근</div>
      <p>토마토</p>
      <span className="orange">오렌지</span>
      <div className="box" tabIndex="-1"> div확인 </div>
      <input/>
    </div>
    
      <span className="orange">오렌지</span>
      <div className="fruits">
        <span>딸기</span>
        <span>수박</span>
        <div>오렌지</div>
        <p>망고</p>
        <h3>사과</h3>
        <br/>
      </div>
      <div>
        <input type="text" value="HEROPY"/>
        <input type="password" value="1234"/>
        <input type="text" value="ABCD"  disabled />
        <span data-fruit-name>사과</span>
      </div>
      <br/>
      <div className="parent">
        <div className="child">
        </div>
       <br/>
      </div>
         <div id ="hello" className="hello" > Hello world!</div>
</>
  );
}

export default App;
