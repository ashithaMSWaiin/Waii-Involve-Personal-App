
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CreateQuestions.css';
import { FaChevronDown } from 'react-icons/fa';
import FileUpload from './FileUpload';
import RichTextEditor from './RichTextEditor';
interface CreateQuestionsProps {
  questionSubmit: () => void;
}
const CreateQuestions: React.FC<CreateQuestionsProps> = ({ questionSubmit }) => {
  const handleEditorChange = (content: string) => {
    console.log('Content was updated:', content);
  };
  return (
    <Form>
      <div style={{ padding: '20px' }}>
      <div style={{ paddingBottom: '15px' }}>
        <Form.Label className="form-title">Give us more Information to help you!</Form.Label>
        <button className="outline-button float-end" >Clear</button>
      </div>
      <Form.Group controlId="technology" className="form-group">
  <Form.Label className="form-label">Select Technology<span className="required-star">*</span></Form.Label>
  <div key='inline-radio'>
  <Form.Check
    inline
      type="radio"
      id="asp_net_zero"
      name="technology"
      value="ASP .NET Zero"
      label="ASP .NET Zero"
      className='radio-label'
    />
   <Form.Check 
    inline
      type="radio"
      id="abp_commercial"
      name="technology"
      value="ABP Commercial"
      label="ABP Commercial"
      className='radio-label'
    />
       
      </div>

</Form.Group>
      <Form.Group controlId="framework_version" className="form-group mb-125">
      <Form.Label className="form-label">Select Framework Version<span className="required-star">*</span></Form.Label>
      <div className="select-wrapper">
        <Form.Control as="select" className="select-control">
          <option value="abp_8_2">ABP 8.2</option>
          <option value="abp_8_1">ABP 8.1</option>

        </Form.Control>
        <FaChevronDown className="chevron-icon" />
      </div>
    </Form.Group>
      <Form.Group controlId="ui_type" className="form-group mb-125">
      <Form.Label className="form-label">Select UI Type<span className="required-star">*</span></Form.Label>
      <div className="select-wrapper">
        <Form.Control as="select" className="select-control">
          <option value="blazor_web_assembly">Blazor Web Assembly</option>
        </Form.Control>
        <FaChevronDown className="chevron-icon" />
      </div>
    </Form.Group>
    <Form.Group controlId="db_system" className="form-group mb-125">
      <Form.Label className="form-label">Select Database System<span className="required-star">*</span></Form.Label>
      <div className="select-wrapper">
        <Form.Control as="select" className="select-control">
          <option value="ef_core_sql_server">EF Core (SQL Server)<span className="required-star">*</span></option>
        </Form.Control>
        <FaChevronDown className="chevron-icon" />
      </div>
    </Form.Group>
    <Form.Group controlId="category" className="form-group mb-125">
      <Form.Label className="form-label">Select Category<span className="required-star">*</span></Form.Label>
      <div className="select-wrapper">
        <Form.Control as="select" className="select-control">
          <option value="debug">Debug</option>
          <option value="test">Test</option>

        </Form.Control>
        <FaChevronDown className="chevron-icon" />
      </div>
    </Form.Group>
      <Form.Group controlId="title">
        <Form.Label>Title<span className="required-star">*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the title"
          value="Facing difficulty in accessing the application"
        />
      </Form.Group>
      <Form.Group controlId="title">
        <Form.Label>Description<span className="required-star">*</span></Form.Label>
        <RichTextEditor />
      </Form.Group>
      <div>
  <FileUpload/>
      </div>
      <button className="outline-button">Cancel</button>
      <button className="primary-button" onClick={questionSubmit}>Submit</button>

      
      </div>
    </Form>
  );
}

export default CreateQuestions;
