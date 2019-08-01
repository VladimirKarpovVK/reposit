
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Main page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>
<style>
.green{
    cursor:pointer;
 color:green;
 font-size:2em;
 padding-left:5%;
}
</style>
<body>
    
   <form action="">
    <ul class="list-group">
     
    <?php foreach ($query->result() as $row)
    {
        ?>
   
        <li class="list-group-item"><?= $row->news_name;?> <i  news_id=<?=$row->ID;?> class="fa green fa-trash delete_news" aria-hidden="true"></i></li> 
      <?php      
      }
      ?>
    
    </ul>
    </form>
    <script
			  src="https://code.jquery.com/jquery-3.4.1.js"
			  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			  crossorigin="anonymous"></script>
<script>
$(document).ready(function(){
  
    
    $(".delete_news").click(function ( ) {
        let id=$(this).attr('news_id');
        console.log(id);
        $.ajax({
      type: "POST",
      url: "<?php echo site_url();?>/software/search/"+id,
      success:function(data){
        alert(data);
      },

    });
         
    }) 
})
</script>


</body>
</html>