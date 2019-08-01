<?php

?>

<ul class="list-group">
<?php
foreach($posts as $post) 
{

    ?>
<li class="list-group-item"><?=$post['news_name'];?></li>



<?php
}
?>
</ul>