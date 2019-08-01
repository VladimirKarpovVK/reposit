<?php



class Posts  extends CI_Controller {


    public function index (){


        $data['posts']=$this->post_model->get_posts();
          $this->load->view('templates/header');
        $this->load->view('posts/index', $data);
        $this->load->view('templates/footer');

    }


    public function create (){
        $data['title']='Create posts';
        $this->form_validation->set_rules('news','News','required');
        

        if($this->form_validation->run()===FALSE){

            $this->load->view('templates/header');
            $this->load->view('posts/create', $data);
            $this->load->view('templates/footer');
            
        }
        else{
             $this->post_model->create_post();
             $this->load->view('posts/success');
           }
    }
}
?>