<h2><?= $title; ?></h2>
<?php echo validation_errors(); ?>
<?php echo form_open('posts/create'); ?>
   <div class="form-group">
    <label >News</label>
    <input type="text" 
    name="news"
    class="form-control"  aria-describedby="emailHelp" placeholder="add news">
    <small id="emailHelp" class="form-text text-muted">Choose any news you want to</small>
  </div>
  
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>