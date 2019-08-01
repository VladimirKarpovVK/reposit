<?php

class Post_model extends CI_Model {
    public function __construct(){
        $this->load->database();
    }

    public function get_posts(){
        $query=$this->db->get('news');
        return $query->result_array();
    
    }

    public function create_post() {
 
        $data=array('news_name'=>$this->input->post('news'));


        return $this->db->insert('news',$data);
    }
}