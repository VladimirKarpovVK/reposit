<?php

class Pages extends CI_Controller {


    
     
    public function view ($page='home'){
        if(!file_exists(APPPATH.'views/pages'.$page.'php'))
         {

        }
        
 $this->load->database();


 $query = $this->db->query('SELECT ID, news_name FROM news');

$data['query']=$query;
 $this->load->view('pages/'.$page,$data);
?>



        
 
  
        
 <?php


    }
       
}

 ?>